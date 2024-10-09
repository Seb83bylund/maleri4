import { Link } from 'react-router-dom';
import bild from '../../src/images/painters-8457165_1280.webp';
import ppp from '../../src/images/istockphoto-1461683093-1024x1024.jpg';
import ccc from '../../src/images/istockphoto-1466480187-1024x1024.jpg';
import xxx from '../../src/images/painter-2751666_1280.jpg';
import målerikalkylator from '../js/main';

const jobType = ['Måla vägg', 'Riva tapet', 'Bredspacklas', 'Tak', 'Fönster', 'Lister'];
const jobPrice = [100, 100, 100, 100, 100, 100];
const paintCost = [100, 100, 100, 100, 100, 100];
const plasterCost = [100, 100, 100, 100, 100, 100];
const paintBool = [true, true, true, true, true, true];
const plasterBool = [true, true, true, true, true, true];

const jobContent = [jobType, jobPrice, paintCost, plasterCost, paintBool, plasterBool];

let everything = målerikalkylator(jobContent, 0, 3);

console.log(everything);




function Pris () {
    return (
        <div className='h-[60rem]'>
            <header className='flex justify-center'>
                <div className='w-1/4 content-center'>
                    <h1 className='text-3xl text-center'>Stockholms bästa målerifirma</h1>
                    <p className='pt-5 pr-15 text-center'>
                        Med flera års erfarenhet inom måleribranschen
                    </p>
                    <div className='flex justify-center'>
                       <Link to="/Tjanster" className='float-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded-full items-center' >
                            Kontakta oss
                       </Link>
                    </div>
                </div>
                <div className='w-3/4'>
                    <img src={bild} className='object-right object-cover h-[25rem] w-[95rem]' />
                </div>
            </header>
            <main>

                <div className='flex gap-12 bg-blue-200 p-4 justify-center text-xl'>
                    <div>
                        <p>
                            Målat över 1000 lägenheter i Stockholm
                        </p>
                    </div>
                    <div>
                        <p>
                            Bara innanför tullarna
                        </p>
                    </div>
                    <div>
                        <p>
                            Omsätter över 10M 
                        </p>
                    </div>
                    <div>
                        <p>
                            97% av jobben blev klara i tid
                        </p>
                    </div>
                </div>
                <div className='flex m-12 gap-12'>
                    <div>
                        <img src={ppp} className='object-cover h-[20rem] w-[40rem]' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>Vasastan</div>
                            <p className='text-gray-700 text-base'>
                                Här utförs ett måleriarbete i en butikslokal i dom västra delarna av Vasastan.
                            </p>
                            <div className='flex justify-center'>
                                <Link to="/priser" className='float-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded-full items-center'>
                                    Kontakta oss
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={ccc} className='object-cover h-[20rem] w-[40rem]' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>Östermalm</div>
                            <p className='text-gray-700 text-base'>
                                Måleriarbete i ett kontorslandskap i dom västra delarna av Östermalm.
                            </p>
                            <div className='flex justify-center'>
                                <Link to="/priser" className='float-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded-full items-center'>
                                    Kontakta oss
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={xxx} className='object-cover h-[20rem] w-[40rem]' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>Kungsholmen</div>
                            <p className='text-gray-700 text-base'>
                                Målning av lägenhet hos privatperson på Fridhemsplan
                            </p>
                            <div className='flex justify-center'>
                                <Link to="/priser" className='float-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded-full items-center'>
                                    Kontakta oss
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='justify-center m-20'>
                        <h1 className='font-bold text-3xl text-center'>Vill du veta hur mycket det kostar att måla om hemma hos dig?</h1>
                        <br />
                        <h1 className='font-bold text-4xl mt-10 text-center'>Fyll i formuläret nedan, svar inom 2 minuter!</h1>
                    </div>
                </div>
                <div className='flex justify-between ml-10'>
                    <div>
                        <img src={xxx} className='h-[54rem] w-[40rem] p-5' />
                    </div>
                    <form>
                       <div className='justify-center p-5 mr-10'>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Ditt namn
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Din e-mail
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Ange antalet kvadratmeter vägg som ska målas
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Ange antal kvadratmeter vägg där tapet behöver rivas
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Ange hur många kvadratmeter vägg som behöver bredspacklas
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Ange hur många kvadratmeter tak som ska målas
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Ange hur många fönster som ska målas
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <label className='text-gray-700 font-bold text-xl px-10 items-center' for="anvandarnamn">
                                    Ange hur många meter list som ska målas
                                </label>
                                <br />
                                <input className='border rounded w-1/2 py-2 px-3 text-gray-700 mt-5 mb-5' />
                            </div>
                            <div className='text-center'>
                                <button className='float-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded-full items-center'>
                                   Skicka Kostnadsförslag
                                </button>
                            </div>
                       </div>
                    </form>
                </div>

            </main>
        </div>
    );
}


export default Pris;