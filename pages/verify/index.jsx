import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export default function VerifyIndex() {
    const [certId, setCertId] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');

        const cleanId = certId.trim();
        if (!cleanId) return;

        setIsLoading(true);

        try {
            // Check if the document exists in Firestore before navigating
            const docRef = doc(db, 'Certificates', cleanId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // If found, proceed to the dynamic page
                router.push(`/verify/${cleanId}`);
            } else {
                // If not found, show a formal error message
                setError('The provided Certification ID does not match our records. Please verify the ID and try again.');
            }
        } catch (err) {
            console.error("Verification error:", err);
            setError('An error occurred during verification. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
            <Head>
                <title>Credential Verification | LET Academy</title>
            </Head>

            {/* Formal Header */}
            <header className="border-b border-slate-200 py-6 px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-800">LET ACADEMY</h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                            Global Credential Verification Service
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-[10px] text-slate-400 uppercase">Official Portal</p>
                        <p className="text-xs font-medium">EST. 2025</p>
                    </div>
                </div>
            </header>

            {/* Main Search Section */}
            <main className="flex-grow flex items-center justify-center px-4">
                <div className="max-w-md w-full border border-slate-200 p-10 rounded-lg shadow-sm bg-white">
                    <h2 className="text-2xl font-semibold mb-2 text-center text-slate-800">Verify Certificate</h2>
                    <p className="text-slate-500 text-sm text-center mb-8">
                        Enter the unique Student ID found on the official document.
                    </p>

                    <form onSubmit={handleSearch} className="space-y-4">
                        <div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1 tracking-widest">
                                Student ID
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. LET-A2-26-001"
                                className={`w-full px-4 py-3 border rounded focus:ring-2 outline-none transition-all font-mono ${error ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-900 focus:border-transparent'
                                    }`}
                                value={certId}
                                onChange={(e) => setCertId(e.target.value)}
                                disabled={isLoading}
                                required
                            />
                            {/* Error Message Display */}
                            {error && (
                                <p className="mt-2 text-[11px] text-red-600 font-medium italic">
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-slate-900 text-white font-bold py-3 rounded hover:bg-slate-800 disabled:bg-slate-400 transition-all uppercase tracking-widest text-xs flex justify-center items-center"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Validating...
                                </>
                            ) : (
                                'Verify Credentials'
                            )}
                        </button>
                    </form>
                </div>
            </main>

            {/* Formal Footer */}
            <footer className="border-t border-slate-200 bg-slate-50 py-10 px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        This verification service is provided by LET Academy. All certifications are aligned with the
                        <strong> Common European Framework of Reference for Languages (CEFR)</strong>.
                        This portal serves as a primary source of validation for academic and professional institutions.
                    </p>
                    <div className="mt-6 flex justify-center space-x-4 opacity-40 grayscale">
                        <span className="text-[10px] font-bold border border-slate-400 px-3 py-1 rounded tracking-tighter">by LET Academy</span>
                        <span className="text-[10px] font-bold border border-slate-400 px-3 py-1 rounded tracking-tighter">AUTHENTICITY SECURED</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}