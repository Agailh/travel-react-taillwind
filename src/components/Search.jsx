import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16 px-4">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Luxury Included Vacation For Two People</h2>
          <p className="py-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui similique eaque delectus voluptates ad ipsam, ducimus, accusamus ullam eligendi quam, necessitatibus molestias temporibus deserunt eius earum eum. Iure aperiam
            veniam eos totam deleniti, autem ab tenetur quam ratione, alias sapiente corrupti quis vel tempora atque ducimus harum aspernatur, praesentium repellat asperiores fuga eligendi laborum. Nisi eaque inventore ipsa similique
            obcaecati quo enim beatae veniam distinctio voluptate non, et eveniet odio illum blanditiis amet eos. Adipisci cumque hic dolores deserunt quos officia, nesciunt consequatur totam eius nam ut voluptate molestiae veniam
            reiciendis quam aperiam dolor consectetur consequuntur minima architecto sequi!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">All-Inclusive Company For 20 years IN-A-Row</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div className="">
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">All-Inclusive Company For 20 years IN-A-Row</p>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        <div className="border text-center">
          <p className="pt-2">Get An Additional 10% OFF</p>
          <p className="py-4">12 Hours Left</p>
          <p className="bg-gray-800 text-gray-200 py-2">Book Now And Save </p>
        </div>
        <form className="w-full ">
          <div className="flex flex-col my-4">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grand Antigus</option>
              <option>Key West</option>
              <option>Lemao 69</option>
              <option>Bazo headquarter</option>
              <option>lighthouse </option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-4">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div>
            <button className="w-full my-4">Rates & Avabilities</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
