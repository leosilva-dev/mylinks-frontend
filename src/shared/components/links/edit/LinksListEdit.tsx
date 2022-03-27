import React, { useCallback } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { useProfileContext } from '../../../hooks/useProfileContext';
import { LinkEdit } from './LinkEdit';

export const LinksListEdit: React.FC = () => {
  const { colorMode } = useColorMode();
  const { links, defineLinks } = useProfileContext();

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      if (links !== undefined) {
        const [reorderedItem] = links.splice(result.source.index, 1);
        links.splice(result.destination.index, 0, reorderedItem);
        links.forEach((option, index) => {
          option.order = index + 1;
        });

        defineLinks([...links]);
      }
    },
    [defineLinks, links],
  );

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {links.map((link, index) => {
                return (
                  <Draggable
                    key={link.id}
                    draggableId={`${link.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          borderRadius: 5,
                          background:
                            colorMode === 'light' ? 'white' : '#1A202C',
                          ...provided.draggableProps.style,
                        }}
                      >
                        <Box marginBottom={2}>
                          <LinkEdit
                            key={link.id}
                            id={link.id}
                            title={link.title}
                            url={link.url}
                            enabled={link.enabled}
                            order={link.order}
                          />
                        </Box>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
