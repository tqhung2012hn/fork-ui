import React, { useState, useCallback } from 'react';
import { Button, Modal } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal
        open={open}
        onClose={onClose}
        title="Modal Title"
        closable={false}
      >
        <Button onClick={onClose}>Close</Button>
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Modal } from '@/components/core';

export default () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal
        open={open}
        onClose={onClose}
        title="Modal Title"
        closable={false}
      >
        <Button onClick={onClose}>Close</Button>
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};
`;

export default Demo;