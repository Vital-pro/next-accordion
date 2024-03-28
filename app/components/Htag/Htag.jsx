import '../Accordion/Accordion.css';

const Htag = ({tag, children}) => {
  switch (tag) {
    case 'h2':
      return <h2 className='h2'>{children}</h2>;
    case 'h3':
      return <h3 className='h3'>{children}</h3>;
    case 'hmodify':
      return <h3 className='hmodify'>{children}</h3>;
    default:
      return <></>;
  }
}

export default Htag;