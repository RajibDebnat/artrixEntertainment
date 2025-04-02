'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

export default function EventBookingForm() {
    const router = useRouter();
    const pathname = usePathname(); // Get current page path
    const [submitted, setSubmitted] = useState(false);
    const [eventType, setEventType] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    // Map pathname to service type
    const getServiceType = () => {
        if (pathname.includes('/services/liveproduction')) return 'Live Production';
        if (pathname.includes('/services/artistcuration')) return 'Artist Curation';
        if (pathname.includes('/services/artistmanagement')) return 'Artist Management';
        if (pathname.includes('/services/brandcollaboration')) return 'Brand Collaboration';
        return 'Other';
    };

    const serviceType = getServiceType();

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => router.push('/'), 4000);
            return () => clearTimeout(timer);
        }
    }, [submitted, router]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        formData.append('service_type', serviceType); // Add service type to form data

        if (file) {
            formData.append('file', file);
        }

        const response = await fetch('/api/send-email', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            setSubmitted(true);
        }

        setLoading(false);
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
                        <button 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            onClick={() => router.push('/')}
                        >
                            Redirecting...
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-2xl font-bold text-center">{serviceType} Booking Form</h2>

                        <input type="hidden" name="service_type" value={serviceType} /> {/* Hidden Input Field */}

                        <div>
                            <label htmlFor="name" className="block font-medium">Full Name</label>
                            <input id="name" type="text" name="name" required className="w-full p-2 border rounded-md" />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block font-medium">Email</label>
                            <input id="email" type="email" name="email" required className="w-full p-2 border rounded-md" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block font-medium">Phone</label>
                            <input id="phone" type="text" name="phone" required className="w-full p-2 border rounded-md" />
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

                        {eventType === 'others' && (
                            <div>
                                <label htmlFor="other_details" className="block font-medium">Please Describe</label>
                                <textarea id="other_details" name="other_details" required className="w-full p-2 border rounded-md"></textarea>
                            </div>
                        )}

                        <div>
                            <label htmlFor="start_date" className="block font-medium">Start Date</label>
                            <input id="start_date" type="date" name="start_date" required className="w-full p-2 border rounded-md" />
                        </div>

                        <div>
                            <label htmlFor="end_date" className="block font-medium">End Date</label>
                            <input id="end_date" type="date" name="end_date" required className="w-full p-2 border rounded-md" />
                        </div>

                        <div>
                            <label htmlFor="description" className="block font-medium">Description</label>
                            <textarea id="description" name="description" required className="w-full p-2 border rounded-md"></textarea>
                        </div>

                        <div>
                            <label htmlFor="file" className="block font-medium">Upload PDF (Optional)</label>
                            <input id="file" type="file" accept="application/pdf" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : submitted ? 'Form Submitted' : 'Submit'}
                        </motion.button>
                    </form>
                )}
            </div>
        </motion.div>
    );
}
