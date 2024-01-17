import Abiodun_Busari_Resume from '../../assets/Abiodun_Busari_Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Abiodun_Busari_Resume} target='_blank' className='btn' rel="noreferrer">Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  );
}

export default CTA;
