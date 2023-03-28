import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay />
      <ModalContent borderRadius={'6px'} bg='pGray.800'>
        <ModalBody
          x="900px"
          y="600px"

          m={0}
          p={0}
        >
          <Image src={imgUrl} h="100%" w="100%" mx={0} pd={0} />
        </ModalBody>
        <ModalFooter justifyContent={'flex-start'}>
          <Text as={'a'} href={imgUrl} target="_blank">
            Abrir original
          </Text>
        </ModalFooter>

      </ModalContent>
    </Modal>
  )
}
