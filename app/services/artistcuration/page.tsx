'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function EventBookingForm() {
    const router = useRouter();
    const [submitted, setSubmitted] = useState(false);
    const [eventType, setEventType] = useState("");
    const [buttonText, setButtonText] = useState("Submit");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText("Submitting...");
        
        const formData = new FormData(e.currentTarget);

        const response = await fetch('/api/send-email', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            setSubmitted(true);
            setButtonText("Form Successfully Submitted");
            
            setTimeout(() => {
                router.push('/');
            }, 2000);
        } else {
            setButtonText("Submit"); // Reset if submission fails
        }
    };

    return (
        <motion.div 
            className="min-h-screen flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="shadow-lg rounded-xl p-6 max-w-2xl w-full">
                {submitted ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-600">Form Submitted Successfully!</h2>
                        <p className="text-gray-600">Redirecting to Home in 4 seconds...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-2xl font-bold text-center">Event Booking Form</h2>
                        
                        <div>
                            <label htmlFor="name" className="block font-medium">Full Name</label>
                            <input id="name" type="text" name="name" required className="w-full p-2 border rounded-md" />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block font-medium">Email</label>
                            <input id="email" type="email" name="email" required className="w-full p-2 border rounded-md" />
                        </div>
                        
                        <div>
                            <label htmlFor="phone" className="block font-medium">Phone Number</label>
                            <input id="phone" type="tel" name="phone" required className="w-full p-2 border rounded-md" />
                        </div>
                        
                        <div>
                            <label htmlFor="artist" className="block font-medium">Artist Name</label>
                            <input id="artist" type="text" name="artist" required className="w-full p-2 border rounded-md" />
                        </div>
                        
                        <div>
                            <label htmlFor="genre" className="block font-medium">Genre</label>
                            <select id="genre" name="genre" required className="w-full p-2 border rounded-md">
                                <option value="">Select Genre</option>
                                {['Bollywood Celebrity', 'Actor', 'Actress', 'Singer', 'Band', 'DJ', 'Influencer', 'Motivation Speaker', 'Sports Person', 'Standup Comedian', 'Host', 'Others'].map((genre) => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="event_type" className="block font-medium">Event Type</label>
                            <select 
                                id="event_type" 
                                name="event_type" 
                                required 
                                className="w-full p-2 border rounded-md"
                                onChange={(e) => setEventType(e.target.value)}
                            >
                                <option value="">Select Event Type</option>
                                <option value="college">College Event</option>
                                <option value="school">School Event</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        {/* Show text area if "Others" is selected */}
                        {eventType === "others" && (
                            <div>
                                <label htmlFor="other_event" className="block font-medium">Specify Event Type</label>
                                <textarea 
                                    id="other_event" 
                                    name="other_event" 
                                    required 
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Describe your event type"
                                ></textarea>
                            </div>
                        )}
                        
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label htmlFor="start_date" className="block font-medium">Start Date</label>
                                <input id="start_date" type="date" name="start_date" required className="w-full p-2 border rounded-md" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="end_date" className="block font-medium">End Date</label>
                                <input id="end_date" type="date" name="end_date" required className="w-full p-2 border rounded-md" />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="description" className="block font-medium">Event Description</label>
                            <textarea id="description" name="description" required className="w-full p-2 border rounded-md"></textarea>
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            className={`w-full p-3 rounded-md text-white ${submitted ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                            type="submit"
                            disabled={submitted}
                        >
                            {buttonText}
                        </motion.button>
                    </form>
                )}
                
                <button 
                    className="mt-4 text-blue-500 underline"
                    onClick={() => router.push('/')}
                >Back to Home</button>
            </div>
        </motion.div>
    );
}
