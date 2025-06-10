
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const index = () => {
  return (
   <>
     <footer className="footer -type-1 mt-50">
      <div className="container">
        <div className=" pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            
             <FooterContent />
            {/* End footer menu content */}
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>

    

   </>
  );
};

export default index;
