export const useProtectedPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        goToLogin(navigate);
      }
    }, [navigate]);
  };