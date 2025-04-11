'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {artistNames} from './../../../lib/data'; // Assuming you have a JSON file with artist names

export default function EventBookingForm() {
    const router = useRouter();
    const pathname = usePathname();
    const [submitted, setSubmitted] = useState(false);
    const [eventType, setEventType] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [artistInput, setArtistInput] = useState('');
    const [filteredArtists, setFilteredArtists] = useState<string[]>([]);

    const getServiceType = () => {
        if (pathname.includes('/services/liveproduction')) return 'Live Production';
        if (pathname.includes('/services/artistcuration')) return 'Artist Curation';
        if (pathname.includes('/services/celebrity-management')) return 'Celebrity Management';
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

    useEffect(() => {
        if (artistInput) {
            setFilteredArtists(
                artistNames.filter((artist) =>
                    artist.toLowerCase().includes(artistInput.toLowerCase())
                )
            );
        } else {
            setFilteredArtists([]);
        }
    }, [artistInput]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        formData.append('service_type', serviceType);
        if (file) formData.append('file', file);

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
        <div className="relative flex w-full items-center justify-center bg-white dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
            
            <motion.div 
                className="w-[90%] max-w-2xl relative z-40 flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 className="max-sm:text-center max-sm:text-[44px] max-lg:text-6xl mb-3 font-bebas text-7xl font-bold tracking-wider">
                    {serviceType}
                </h2>

                <div className="border-[1px] border-primary-yellow shadow-lg rounded-xl p-6 w-full bg-white dark:bg-black">
                    {submitted ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-green-600">Form Submitted Successfully!</h2>
                            <button 
                                className="mt-4 px-4 py-2 text-black bg-yellow-500 rounded-lg hover:bg-yellow-600"
                                onClick={() => router.push('/')}
                            >
                                Redirecting...
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="hidden" name="service_type" value={serviceType} />

                            <div>
                                <label htmlFor="name" className="block font-semibold font-roboto text-yellow-500">Full Name</label>
                                <input id="name" type="text" name="name" required className="w-full p-2 border rounded-md" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-semibold font-roboto text-yellow-500">Email</label>
                                <input id="email" type="email" name="email" required className="w-full p-2 border rounded-md" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block font-semibold font-roboto text-yellow-500">Phone</label>
                                <input id="phone" type="text" name="phone" required className="w-full p-2 border rounded-md" />
                            </div>

                            <div>
                                <label htmlFor="artist" className="block font-semibold font-roboto text-yellow-500">Artist Name</label>
                                <input 
                                    id="artist" 
                                    type="text" 
                                    name="artist" 
                                    required 
                                    autoComplete='false'
                                    className="w-full p-2 border rounded-md"
                                    value={artistInput}
                                    onChange={(e) => setArtistInput(e.target.value)}
                                    list="artist-suggestions"
                                />
                                {/* Suggestions */}
                                {filteredArtists.length > 0 && (
                                    <ul className="border mt-2 rounded-md w-full max-h-40 overflow-auto">
                                        {filteredArtists.map((artist) => (
                                            <li key={artist} className="p-2 cursor-pointer " onClick={() => setArtistInput(artist)}>
                                                {artist}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <datalist id="artist-suggestions">
                                    {filteredArtists.map((artist) => (
                                        <option key={artist} value={artist} />
                                    ))}
                                </datalist>
                            </div>

                            {/* Rest of your form */}
                            <div>
                                <label htmlFor="event_type" className="block font-semibold font-roboto text-yellow-500">Event Type</label>
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
                                    <label htmlFor="other_details" className="block font-semibold font-roboto text-yellow-500">Please Describe</label>
                                    <textarea id="other_details" name="other_details" required className="w-full p-2 border rounded-md" />
                                </div>
                            )}

                            <div>
                                <label htmlFor="start_date" className="block font-semibold font-roboto text-yellow-500">Start Date</label>
                                <input id="start_date" type="date" name="start_date" required className="w-full p-2 border rounded-md" />
                            </div>

                            <div>
                                <label htmlFor="end_date" className="block font-semibold font-roboto text-yellow-500">End Date</label>
                                <input id="end_date" type="date" name="end_date" required className="w-full p-2 border rounded-md" />
                            </div>

                            <div>
                                <label htmlFor="description" className="block font-semibold font-roboto text-yellow-500">Description</label>
                                <textarea id="description" name="description" required className="w-full p-2 border rounded-md" />
                            </div>

                            {/* Optional file upload */}
                            <div>
                                <label htmlFor="file" className="block font-semibold font-roboto text-yellow-500">Attach Reference (Optional)</label>
                                <input type="file" id="file" name="file" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                className="w-full bg-yellow-500 text-black font-semibold p-3 rounded-md hover:bg-yellow-600"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </motion.button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
