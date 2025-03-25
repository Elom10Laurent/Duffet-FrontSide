import ProductPage from "../components/ProductComponent.tsx";
import Testimony from "../components/Testimony.tsx";

const HomePage = () => {
  
  return <div>
      <div className="">
        <div className="items-center justify-between py-4">
          <div className=" lg:w-6/12  px-4 space-y-6">
            <h1 className=" text-5xl font-semibold ">Soyez Inspirer </h1>
            <p className=" text-xl font-semibold ">
              Le vintage a une âme, le moderne une touche d’audace. Pourquoi
              choisir ? Associez l’élégance intemporelle avec tendances pour
              un look unique et authentique.{" "}
            </p>
          </div>
        </div>
        <ProductPage />
        <div className=" py-10">
           <Testimony/>
        </div>
      </div>
    </div>;
};

export default HomePage;
