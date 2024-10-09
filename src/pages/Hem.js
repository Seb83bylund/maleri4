import bild from '../../src/images/Skärmbild_6-10-2024_114019_vasastansmaleri.se.jpeg'

function Hem () {
    return (
        <div>
            <img src={bild} className='h-[25rem] w-screen' />
        </div>
    );
}

export default Hem;