const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  InspectorControls,
  ColorPalette,
  MediaUpload
} = wp.editor;
const {
  PanelBody,
  IconButton,
  RangeControl
} = wp.components;
registerBlockType('yamnish/a25-block-first', {
  title: 'Text and Img',
  description: 'A25 Bootstrap block with text and image',
  icon: 'format-image',
  category: 'a25-blocks',
  // custom attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    titleColor: {
      type: 'string',
      default: 'black'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    backgroundImage: {
      type: 'string',
      default: null
    },
    overlayColor: {
      type: 'string',
      default: 'black'
    },
    overlayOpacity: {
      type: 'number',
      default: 0.3
    }
  },

  edit({
    attributes,
    setAttributes
  }) {
    const {
      title,
      body,
      titleColor,
      backgroundImage,
      overlayColor,
      overlayOpacity
    } = attributes; // custom functions

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    function onSelectImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }

    function onOverlayColorChange(newColor) {
      setAttributes({
        overlayColor: newColor
      });
    }

    function onOverlayOpacityChange(newOpacity) {
      setAttributes({
        overlayOpacity: newOpacity
      });
    }

    return [/*#__PURE__*/React.createElement(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement(PanelBody, {
      title: 'Image Settings'
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u0430:")), /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: backgroundImage,
      render: ({
        open
      }) => /*#__PURE__*/React.createElement(IconButton, {
        className: "editor-media-placeholder__button is-button is-default is-large",
        icon: "upload",
        onClick: open
      }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430")
    }))), /*#__PURE__*/React.createElement("div", {
      class: "cta-container",
      style: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      value: title,
      onChange: onChangeTitle
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "\u0422\u0435\u043A\u0441\u0442",
      value: body,
      onChange: onChangeBody
    }))];
  },

  save({
    attributes
  }) {
    const {
      title,
      body,
      backgroundImage
    } = attributes;
    return /*#__PURE__*/React.createElement("div", {
      class: "row center-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col col-lg-3 col-md-12 box justify-content-center"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "h2",
      value: title
    }), /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "p",
      value: body
    })), /*#__PURE__*/React.createElement("div", {
      class: "col-lg-9 col-md-12 box justify-content-center"
    }, /*#__PURE__*/React.createElement("div", {
      class: "carousel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      class: "carousel-item active"
    }, /*#__PURE__*/React.createElement("img", {
      class: "d-block w-100",
      src: backgroundImage
    })))));
  }

});
registerBlockType('yamnish2/a25-block-second', {
  title: 'Two column text',
  description: 'A25 Bootstrap block with two column text',
  icon: 'format-image',
  category: 'a25-blocks',
  // custom attributes
  attributes: {
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    },
    title2: {
      type: 'string'
    },
    body2: {
      type: 'string'
    }
  },

  edit({
    attributes,
    setAttributes
  }) {
    const {
      title,
      body,
      title2,
      body2
    } = attributes; // custom functions

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onChangeTitle2(newTitle) {
      setAttributes({
        title2: newTitle
      });
    }

    function onChangeBody2(newBody) {
      setAttributes({
        body2: newBody
      });
    }

    return [/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      value: title,
      onChange: onChangeTitle
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "\u0422\u0435\u043A\u0441\u0442",
      value: body,
      onChange: onChangeBody
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A2",
      value: title2,
      onChange: onChangeTitle2
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "\u0422\u0435\u043A\u0441\u04422",
      value: body2,
      onChange: onChangeBody2
    }))];
  },

  save({
    attributes
  }) {
    const {
      title,
      body,
      title2,
      body2
    } = attributes;
    return /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col col-lg-6 col-md-12 box justify-content-center"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "h2",
      value: title
    }), /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "p",
      value: body
    })), /*#__PURE__*/React.createElement("div", {
      class: "col col-lg-6 col-md-12 box justify-content-center"
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "h2",
      value: title2
    }), /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "p",
      value: body2
    })));
  }

});
registerBlockType('yamnish2/a25-block-third', {
  title: 'Contact form',
  description: 'A25 Bootstrap contact form',
  icon: 'format-image',
  category: 'a25-blocks',
  // custom attributes
  attributes: {
    header_row: {
      type: 'string'
    },
    name_row: {
      type: 'string'
    },
    tel_row: {
      type: 'string'
    },
    email_row: {
      type: 'string'
    },
    btn_row: {
      type: 'string'
    }
  },

  edit({
    attributes,
    setAttributes
  }) {
    const {
      name_row,
      tel_row,
      email_row,
      btn_row,
      header_row
    } = attributes; // custom functions

    function onChangeName(newName) {
      setAttributes({
        name_row: newName
      });
    }

    function onChangeTel(newTel) {
      setAttributes({
        tel_row: newTel
      });
    }

    function onChangeEmail(newEmail) {
      setAttributes({
        email_row: newEmail
      });
    }

    function onChangeBtn(newBtn) {
      setAttributes({
        btn_row: newBtn
      });
    }

    function onChangeHeader(newHeader) {
      setAttributes({
        header_row: newHeader
      });
    }

    return [/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Header",
      value: header_row,
      onChange: onChangeHeader
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      className: "nameSel",
      placeholder: "Name",
      value: name_row,
      onChange: onChangeName
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      className: "telSel",
      placeholder: "Number",
      value: tel_row,
      onChange: onChangeTel
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      className: "emailSel",
      placeholder: "Email",
      value: email_row,
      onChange: onChangeEmail
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      className: "btnSel",
      placeholder: "Buton",
      value: btn_row,
      onChange: onChangeBtn
    }))];
  },

  save({
    attributes
  }) {
    const {
      name_row,
      tel_row,
      email_row,
      btn_row,
      header_row
    } = attributes;
    return /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-lg-4"
    }), /*#__PURE__*/React.createElement("div", {
      class: "col-lg-4"
    }, /*#__PURE__*/React.createElement("h2", null, header_row), /*#__PURE__*/React.createElement("form", {
      class: "form-container"
    }, /*#__PURE__*/React.createElement("div", {
      class: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      class: "form-control form-field form-name",
      placeholder: name_row,
      name: "name"
    })), /*#__PURE__*/React.createElement("div", {
      class: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "tel",
      class: "form-control form-field form-number",
      placeholder: tel_row,
      name: "tel"
    })), /*#__PURE__*/React.createElement("div", {
      class: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      class: "form-control form-field form-email",
      placeholder: email_row,
      name: "useremail"
    })), /*#__PURE__*/React.createElement("div", {
      id: "submit-ajax"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-light submit-button btn-block border"
    }, btn_row)))), /*#__PURE__*/React.createElement("div", {
      class: "col-lg-4"
    }));
  }

});