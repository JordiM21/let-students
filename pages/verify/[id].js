import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase'; // Ensure this matches your path
import Image from 'next/image';
import logo from '@/public/let-nobg.png';
import Head from 'next/head';

export default function ResultPage() {
    const router = useRouter();
    const { id } = router.query; // This grabs the ID from the URL (.../verify/[id])

    const [certData, setCertData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;

        const fetchCertificate = async () => {
            try {
                setLoading(true);
                const cleanId = id.trim();

                // This log will tell us exactly what the code is asking for
                console.log(`Requesting: databases/(default)/documents/Certificates/${cleanId}`);

                const docRef = doc(db, "Certificates", cleanId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("SUCCESS: Document found!", docSnap.data());
                    setCertData(docSnap.data());
                    setError(false);
                } else {
                    console.warn("FAILED: Document does not exist at this path.");
                    setCertData(null);
                    setError(true);
                }
            } catch (err) {
                // This is where your "Insufficient Permissions" error is being caught
                console.error("FIREBASE ERROR DETAILS:", err.code, err.message);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchCertificate();
    }, [id]);

    // 1. LOADING STATE
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Validating Credentials...</p>
                </div>
            </div>
        );
    }

    // 2. ERROR / NOT FOUND STATE
    if (error || !certData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
                <div className="max-w-md w-full bg-white border border-red-100 p-10 text-center shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">Verification Failed</h1>
                    <p className="text-sm text-slate-500 mb-6">
                        The ID <span className="font-mono font-bold text-slate-700">{id}</span> does not match any official academic record in our database.
                    </p>
                    <button
                        onClick={() => router.push('/verify')}
                        className="text-xs font-bold uppercase tracking-widest bg-slate-900 text-white px-6 py-3 rounded hover:bg-slate-800 transition-all"
                    >
                        Return to Search
                    </button>
                </div>
            </div>
        );
    }

    // 3. SUCCESS STATE - THE CERTIFICATE
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Head>
                <title>Record Found | {certData.studentName}</title>
            </Head>

            <header className="border-b border-slate-200 py-6 px-8 bg-white print:hidden">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold tracking-tight text-slate-800">LET ACADEMY</h1>
                    <button
                        onClick={() => router.push('/verify')}
                        className="text-xs text-slate-500 hover:text-slate-900 transition-colors flex items-center"
                    >
                        <span className="mr-1 text-lg">←</span> New Search
                    </button>
                </div>
            </header>

            <main className="flex-grow py-12 px-4 print:py-0 print:px-0">
                <div className="relative max-w-2xl mx-auto bg-white border border-slate-200 shadow-xl rounded-sm overflow-hidden print:shadow-none print:border-none z-10">
                    <div className="relative z-10">
                        {/* Verified Banner */}
                        <div className="bg-emerald-50 border-b border-emerald-100 p-4 flex items-center justify-center space-x-2 print:bg-white print:border-emerald-200">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse print:hidden"></div>
                            <span className="text-emerald-700 font-bold text-[10px] uppercase tracking-[0.2em]">
                                Authentic Document Verified
                            </span>
                        </div>

                        <div className="p-10">
                            {/* Student Data Mapping */}
                            <section className="mb-10">
                                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Full Name of Student</h2>
                                <p className="text-4xl font-light text-slate-900 leading-tight">{certData.studentName}</p>
                            </section>

                            <div className="grid grid-cols-2 gap-8 mb-10 border-b border-slate-50 pb-8">
                                <section>
                                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Student ID</h2>
                                    <p className="font-mono text-sm text-slate-700">{id}</p>
                                </section>
                                <section>
                                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Issue Date</h2>
                                    <p className="text-sm text-slate-700">{certData.issueDate}</p>
                                </section>
                            </div>

                            {/* Scores Box with Internal Watermark */}
                            <section className="relative overflow-hidden mb-8 p-8 bg-slate-900 text-white rounded-sm print:bg-slate-900 print:text-white">
                                <div className="absolute -bottom-8 right-40 opacity-[0.08] pointer-events-none select-none grayscale invert">
                                    <Image src={logo} alt="Watermark" width={250} height={250} className="object-contain" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">CEFR Proficiency Level</h2>
                                            <p className="text-2xl text-white font-bold">{certData.cefrLevel}</p>
                                        </div>
                                        <div className="text-right border-l border-slate-700 pl-6">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Overall Score</p>
                                            <p className="text-4xl font-bold text-white">{certData.overallScore}</p>                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-700">
                                        <p className="text-[11px] text-slate-300 leading-relaxed italic">
                                            "The candidate has demonstrated a Waystage level of proficiency. They can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. basic personal and family information, shopping, local geography, employment). They can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters, and can describe in simple terms aspects of their background, immediate environment and matters in areas of immediate need."</p>
                                    </div>
                                </div>
                            </section>
                            {/* Updated Skills Mapping for your specific Firestore structure */}
                            <section className="mb-10 relative z-10">
                                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Competency Breakdown</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {certData.skillsBreakdown && Object.entries(certData.skillsBreakdown).map(([skill, value]) => (
                                        <div key={skill} className="border border-slate-100 bg-slate-50/50 p-4 rounded-sm text-center">
                                            <p className="text-[9px] uppercase font-bold text-slate-400 mb-1">{skill}</p>
                                            {/* Just 'value' here because your scores in the screenshot are numbers like 145 */}
                                            <p className="text-xl font-semibold text-slate-800">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="flex justify-center pt-4 print:hidden relative z-10">
                                <button
                                    onClick={() => window.print()}
                                    className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded text-xs font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                                >
                                    <span className='text-white'>DOWNLOAD OFFICIAL RECORD (PDF)</span>
                                </button>
                            </div>
                        </div>

                        <footer className="bg-slate-50 p-8 border-t border-slate-100 text-center relative z-10">
                            <p className="text-[10px] text-slate-400 leading-relaxed max-sm mx-auto">
                                This record is digitally signed and verified by the LET Academy Registrar.
                                Primary source of verification for educational institutions.
                            </p>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    );
}