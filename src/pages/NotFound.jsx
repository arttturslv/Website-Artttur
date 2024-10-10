import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CustomToolTip from "../components/CustomToolTip";
import { useNavigate } from 'react-router-dom';

export default function NotFound({ theme, setTheme }) {
    const navigate = useNavigate();

    function handleGoBack() {
        navigate(-1)
    }

    return (
    <div id="at" className={`${theme ?? 'dark'}`}>
      <div className="max-sm:w-screen flex justify-center bg-platinum dark:bg-jet min-h-screen">
        <div className="dark:text-platinum max-w-[1240px] w-full min-h-screen space-y-8 text-jet">
          <Navbar setTheme={setTheme} theme={theme} />
          <div className="flex justify-center items-center h-[80%]">
            <div className="flex items-center flex-col">
                <CustomToolTip text={"Como você veio parar aqui?"}>
                <h1 className="text-[128px] font-bold">404</h1>
                </CustomToolTip>
                <h4 className="text-lg font-bold">A página procurada não existe.</h4>
                <div className=' flex justify-center w-[100%] h-16'>
                    <Button content={"Voltar para a Home"} action={handleGoBack}></Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
