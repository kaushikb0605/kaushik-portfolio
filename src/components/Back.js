import { useNavigate} from "react-router-dom";

const Back = () => {
    let navigate = useNavigate();
    
    return (
        <>
          <button onClick={() => navigate(-1)}  className='mr-10 text-white'>{`<`}</button> 
        </>
    );
};

export default Back