/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import CustomButton from "./NextUi/CustomBtn";

const ModalComponent = ({ isOpen, onOpenChange, cardInfo, onClick }) => {
  const handlePress = (onClose) => {
    onClose();
    onClick();
  };


  return (
    <Modal
      isOpen={isOpen}
      placement="center"
      onOpenChange={onOpenChange}
      // [box-shadow:1px_-8px_29px_-11px_rgba(247,255,0,1)]
      className="bg-slate-400 rounded-t-3xl border-t-4 border-yellow-300 [box-shadow:5px_3px_25px_4px_rgba(247,255,0,1)]"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center">
              {cardInfo.icon_lg}
            </ModalHeader>
            <ModalBody>
              <h1 className="text-center font-bold text-2xl">
                {cardInfo.title}
              </h1>
              <div className="flex items-center justify-center gap-2">
                <img className="w-10 h-10" src="./coin.png" alt="coin" />
                <span className="text-black text-2xl font-bold">
                  {cardInfo.reward === 'Free' ? 'Free' : Number(cardInfo.reward).toLocaleString()}
                </span>
              </div>
            </ModalBody>
            <ModalFooter>
              <CustomButton
                className="w-full py-9"
                size="lg"
                color="primary"
                onClick={() => handlePress(onClose)}
                radius={"lg"}
                variant={"shadow"}
              >
                Check
              </CustomButton>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
