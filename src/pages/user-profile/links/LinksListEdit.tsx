import { useColorMode } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { useProfileContext } from '../../../shared/hooks/useProfileContext';
import { LinkEdit } from './LinkEdit';

export const LinksListEdit: React.FC = () => {
  const { links, defineLinks } = useProfileContext();
  const { colorMode } = useColorMode();

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
                    {(provided, { isDragging }) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          background: isDragging
                            ? colorMode === 'light'
                              ? '#FDFFFC'
                              : '#2D3748'
                            : 'transparent',
                          borderRadius: 5,
                          paddingRight: isDragging ? 3 : 0,
                          paddingTop: isDragging ? 1.5 : 0,
                        }}
                      >
                        <LinkEdit
                          key={link.id}
                          id={link.id}
                          title={link.title}
                          url={link.url}
                          enabled={link.enabled}
                          order={link.order}
                        />
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
