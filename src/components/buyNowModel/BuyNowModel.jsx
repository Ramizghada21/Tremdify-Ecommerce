import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import React, { useState } from "react";

const BuyNowModel = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
      >
        Buy Now
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-pink-50 flex items-center justify-center"
      >
        <DialogBody className="w-full max-w-md mx-auto bg-white rounded-lg p-6">
          <div className="mb-3">
            <input
              type="text"
              value={addressInfo.name}
              onChange={(e) =>
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                })
              }
              placeholder="Enter Your Name"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={addressInfo.address}
              onChange={(e) =>
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                })
              }
              placeholder="Enter Your Address"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={addressInfo.mobileNumber}
              onChange={(e) =>
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                })
              }
              placeholder="Enter Your Mobile Number"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={addressInfo.pincode}
              onChange={(e) =>
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                })
              }
              placeholder="Enter Your Pincode"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div>
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Buy Now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModel;
