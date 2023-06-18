function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSession } from '../../../contexts/SessionContext';
import { useApi } from '../../../contexts/ApiContext';
import { useToast, ToastType } from '../../../contexts/ToastContext';
import { useLanguage } from '../../../contexts/LanguageContext';

/**
 * Component to manage to send gift card behavior without UI component
 */
export const SendGiftCard = props => {
  const {
    UIComponent,
    giftCardId,
    setIsGiftCardSent
  } = props;
  const [{
    token
  }] = useSession();
  const [ordering] = useApi();
  const [, {
    showToast
  }] = useToast();
  const [, t] = useLanguage();
  const [actionState, setActionState] = useState({
    loading: false,
    error: null
  });
  const handleSendGiftCard = async values => {
    try {
      setActionState({
        ...actionState,
        loading: true
      });
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(values)
      };
      const response = await fetch(`${ordering.root}/gift_cards/${giftCardId}/send`, requestOptions);
      const {
        error,
        result
      } = await response.json();
      setActionState({
        loading: false,
        error: error ? result : null
      });
      setIsGiftCardSent(true);
      if (props.showToastMsg) {
        showToast(error ? ToastType.Error : ToastType.Success, error ? t('ERROR', result[0]) : t('GIFT_CARD_SENT', 'The gift card sent'));
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, UIComponent && /*#__PURE__*/React.createElement(UIComponent, _extends({}, props, {
    actionState: actionState,
    handleSendGiftCard: handleSendGiftCard
  })));
};
SendGiftCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
};
SendGiftCard.defaultProps = {};