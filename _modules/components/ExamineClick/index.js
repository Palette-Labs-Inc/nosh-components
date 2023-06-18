import React, { useRef } from 'react';
export const ExamineClick = ({
  onFiles,
  childRef,
  children,
  className,
  style,
  accept,
  disabled
}) => {
  const inputRef = useRef(null);
  const handleClick = e => {
    if (!childRef) {
      inputRef.current.click();
    }
  };
  const handleChange = e => {
    e.preventDefault();
    e.stopPropagation();
    onFiles(e.target.files);
  };
  return /*#__PURE__*/React.createElement("div", {
    draggable: true,
    onClick: handleClick,
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    onChange: handleChange,
    onClick: e => e.stopPropagation(),
    ref: e => {
      inputRef.current = e;
      childRef && childRef(e);
    },
    accept: accept,
    disabled: disabled
  }), children);
};