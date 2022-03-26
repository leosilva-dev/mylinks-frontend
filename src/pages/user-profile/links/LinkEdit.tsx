import React, { useRef, useState } from 'react';
import {
  Box,
  HStack,
  IconButton,
  VStack,
  Divider,
  Stack,
  Switch,
  Input,
  Icon,
  Text,
  useOutsideClick,
  Button,
  useDisclosure,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';
import { FiTrash2, MdEdit } from 'react-icons/all';

import { ILinks } from '../../../shared/services/api/links/Links';

export const LinkEdit: React.FC<ILinks> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [url, setUrl] = useState(props.url);
  const [enabled, setEnabled] = useState(props.enabled);
  const [titleIsInEditMode, setTitleIsInEditMode] = useState(false);
  const [urlIsInEditMode, setUrlIsInEditMode] = useState(false);

  const { onOpen } = useDisclosure();

  const refEditTitle = useRef<HTMLDivElement>(null);
  const refEditUrl = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: refEditTitle,
    enabled: titleIsInEditMode,
    handler: () => toggleEditTitle(),
  });

  useOutsideClick({
    ref: refEditUrl,
    enabled: urlIsInEditMode,
    handler: () => toggleEditUrl(),
  });

  const toggleEditTitle = () => {
    setTitleIsInEditMode(!titleIsInEditMode);
  };
  const toggleEditUrl = () => {
    setUrlIsInEditMode(!urlIsInEditMode);
  };

  const handleDeleteLink = () => {
    console.log(`delete link clicked to ${title}`);
  };

  return (
    <Box width={'full'} boxShadow={'base'} borderRadius={'base'}>
      <HStack /* border={'1px solid green'} */>
        <Stack paddingLeft={2}>
          <Box cursor={'grabbing'}>
            <DragHandleIcon />
          </Box>
        </Stack>
        <HStack justify={'space-between'} p={0}>
          <Stack
            align="start"
            /*  border={'1px solid blue'} */
            direction="row"
            h="60px"
          >
            <Divider orientation="vertical" />
            <VStack paddingTop={1} align="flex-start">
              {titleIsInEditMode ? (
                <Input
                  autoFocus
                  value={title}
                  variant="unstyled"
                  isTruncated
                  isFullWidth
                  fontSize="sm"
                  placeholder="Digite o título"
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <Box ref={refEditTitle} cursor={'pointer'}>
                  <Text
                    variant="unstyled"
                    isTruncated
                    fontSize="sm"
                    onClick={toggleEditTitle}
                  >
                    {`${title} `}
                    <Icon as={MdEdit} boxSize={3} color="gray.400" />
                  </Text>
                </Box>
              )}

              {urlIsInEditMode ? (
                <Input
                  autoFocus
                  value={url}
                  variant="unstyled"
                  isTruncated
                  isFullWidth
                  fontSize="sm"
                  placeholder="Digite a URL"
                  onChange={(e) => setUrl(e.target.value)}
                />
              ) : (
                <Box ref={refEditUrl} cursor={'pointer'}>
                  <Text
                    variant="unstyled"
                    isTruncated
                    fontSize="sm"
                    onClick={toggleEditUrl}
                  >
                    {`${url} `}
                    <Icon as={MdEdit} boxSize={3} color="gray.400" />
                  </Text>
                </Box>
              )}
            </VStack>
          </Stack>

          <Stack /* border={'1px solid red'} */ direction="row" h="60px">
            <VStack paddingTop={1} paddingRight={2}>
              <Switch
                _focus={{ boxShadow: 'none' }}
                onChange={() => setEnabled(!enabled)}
                isChecked={enabled}
                size={'sm'}
                colorScheme={'whatsapp'}
              />
              <Box>
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      disabled={false}
                      fontSize="18px"
                      size={'sm'}
                      colorScheme="#26C485"
                      aria-label={'delete task'}
                      onClick={() => onOpen()}
                      variant="ghost"
                    >
                      <Icon as={FiTrash2} />
                    </IconButton>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>
                      Tem certeza que deseja excluir?
                    </PopoverHeader>
                    <PopoverBody>
                      <Button
                        size={'sm'}
                        bg={'red.500'}
                        color={'white'}
                        _hover={{ bg: 'red.700' }}
                        onClick={handleDeleteLink}
                      >
                        Deletar
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </VStack>
          </Stack>
        </HStack>
      </HStack>
    </Box>
  );
};
