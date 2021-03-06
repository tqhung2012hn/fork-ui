import React, { useRef, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureConfirm from '../PureConfirm';
import Dialog from '../Dialog';

import useDebounce from '../../hooks/useDebounce';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const Confirm = ({ className, open, onClose, onOk, onCancel, ...otherProps }) => {
  const delayOpen = useDebounce(open, 100);
  const _onOk = useCallback(() => {
    onClose();
    onOk();
  }, []);

  const _onCancel = useCallback(() => {
    onClose();
    onCancel();
  }, []);

  useLockBodyScroll(delayOpen);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <Dialog.Portal className={cn('fui-confirm-portal', { 'fui-confirm-portal--close-animation': !open })}>
            <PureConfirm
              className={cn('fui-confirm', className)}
              onOk={_onOk}
              onCancel={_onCancel}
              {...otherProps}
            />
          </Dialog.Portal>
        </Portal>
      )}
    </React.Fragment>
  );
};

Confirm.displayName = 'Confirm';
Confirm.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  confirmRef: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.any,
};
Confirm.defaultProps = {
  onCancel: f => f,
  onOk: f => f,
};

export default Confirm;