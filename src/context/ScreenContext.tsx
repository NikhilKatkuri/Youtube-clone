"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
 
interface DM {
  width: number;
  height: number;
}

type ScreenContextType = {
  value: string;
  setvalue: (value: string) => void;
  Dimention: DM;
  isSidebar: boolean;
  setisSidebar: (isSidebar: boolean) => void;
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setvalue] = useState<string>("defaultValue");
  const [Dimention, setDimention] = useState<DM>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function UpDation() {
      setDimention({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    UpDation();
    window.addEventListener("resize", UpDation);
    return () => {
      window.removeEventListener("resize", UpDation);
    };
  }, []);
  const [isSidebar, setisSidebar] = useState<boolean>(false);
 
  return (
    <ScreenContext.Provider
      value={{ isSidebar, setisSidebar, value, setvalue, Dimention }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreenContext = () => {
  const context = useContext(ScreenContext);
  if (!context)
    throw new Error(
      "useScreenContext must be used within a ScreenContextProvider"
    );
  return context;
};
