import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet";

const Header = () => {
  return (
    <>
      <div className="bg-red-500 h-[45px] px-4 flex items-center text-white">
        <div>
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        Header
      </div>
    </>
  );
};

export default Header;
