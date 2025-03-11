import { useState, useEffect, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DragOffset {
  x: number;
  y: number;
}

export function useDraggable(ref: RefObject<HTMLDivElement>) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<DragOffset>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (ref.current) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  // Handle mouse movement while dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        snapToCorner();
      }
    };

    // Snap to nearest corner when dragging ends
    const snapToCorner = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let targetX = position.x;
      let targetY = position.y;

      // Determine closest edge
      const distToLeft = targetX;
      const distToRight = windowWidth - (targetX + rect.width);
      const distToTop = targetY;
      const distToBottom = windowHeight - (targetY + rect.height);

      // Snap to closest horizontal edge
      if (distToLeft < distToRight) {
        targetX = 0;
      } else {
        targetX = windowWidth - rect.width;
      }

      // Snap to closest vertical edge
      if (distToTop < distToBottom) {
        targetY = 0;
      } else {
        targetY = windowHeight - rect.height;
      }

      // Animate to position
      animateToPosition(targetX, targetY);
    };

    // Smooth animation to target position
    const animateToPosition = (targetX: number, targetY: number) => {
      const startX = position.x;
      const startY = position.y;
      const distanceX = targetX - startX;
      const distanceY = targetY - startY;
      const startTime = performance.now();
      const duration = 300; // ms

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out

        const newX = startX + distanceX * easeProgress;
        const newY = startY + distanceY * easeProgress;

        setPosition({ x: newX, y: newY });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, position, ref]);

  return {
    position,
    isDragging,
    handleMouseDown,
  };
}
