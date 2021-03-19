const { registerBlockType } = wp.blocks;
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

    edit({ attributes, setAttributes }) {
        const {
            title,
            body,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity
        } = attributes;

        // custom functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } );
        }

        function onChangeBody(newBody) {
            setAttributes( { body: newBody } );
        }

        function onTitleColorChange(newColor) {
            setAttributes( { titleColor: newColor } );
        }

        function onSelectImage(newImage) {
            setAttributes( { backgroundImage: newImage.sizes.full.url } );
        }
        function onOverlayColorChange(newColor) {
            setAttributes( { overlayColor: newColor } );
        }
        function onOverlayOpacityChange(newOpacity) {
            setAttributes( { overlayOpacity:newOpacity } );
        }

        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
            <PanelBody title={ 'Image Settings' }>
            <p><strong>Выберете изображение для блока:</strong></p>
            <MediaUpload
            onSelect={ onSelectImage }
            type="image"
            value={ backgroundImage }
            render={ ( { open } ) => (
                <IconButton
                className="editor-media-placeholder__button is-button is-default is-large"
                icon="upload"
                onClick={ open }>
                Изображение блока
                </IconButton>
            )}/>
            </PanelBody>
            </InspectorControls>,
            <div class="cta-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
            }}>
            <RichText key="editable"
            tagName="h2"
            placeholder="Заголовок"
            value={ title }
            onChange={ onChangeTitle }/>
            <RichText key="editable"
            tagName="p"
            placeholder="Текст"
            value={ body }
            onChange={ onChangeBody }/>
            </div>
        ]);
    },

    save({ attributes }) {
        const {
            title,
            body,
            backgroundImage
        } = attributes;

        return (
            <div class="row center-content">
            <div class="col col-lg-3 col-md-12 box justify-content-center">
            <RichText.Content tagName="h2" value={ title }/>
            <RichText.Content tagName="p" value={ body }/>
            </div>
            <div class="col-lg-9 col-md-12 box justify-content-center">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src={ backgroundImage }/>
            </div>
            </div>
            </div>
            </div>
        );
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
            type: 'string',
        },
        body: {
            type: 'string',
        },
        title2: {
            type: 'string',
        },
        body2: {
            type: 'string',
        },
    },

    edit({ attributes, setAttributes }) {
        const {
            title,
            body,
            title2,
            body2,
        } = attributes;

        // custom functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } );
        }

        function onChangeBody(newBody) {
            setAttributes( { body: newBody } );
        }
        function onChangeTitle2(newTitle) {
            setAttributes( { title2: newTitle } );
        }

        function onChangeBody2(newBody) {
            setAttributes( { body2: newBody } );
        }


        return ([
            <div>
            <RichText key="editable"
            tagName="h2"
            placeholder="Заголовок"
            value={ title }
            onChange={ onChangeTitle }/>
            <RichText key="editable"
            tagName="p"
            placeholder="Текст"
            value={ body }
            onChange={ onChangeBody }/>
            <RichText key="editable"
            tagName="h2"
            placeholder="Заголовок2"
            value={ title2 }
            onChange={ onChangeTitle2 }/>
            <RichText key="editable"
            tagName="p"
            placeholder="Текст2"
            value={ body2 }
            onChange={ onChangeBody2 }/>
            </div>
        ]);
    },

    save({ attributes }) {
        const {
            title,
            body,
            title2,
            body2,

        } = attributes;

        return (
            <div class="row">
            <div class="col col-lg-6 col-md-12 box justify-content-center">
            <RichText.Content tagName="h2" value={ title }/>
            <RichText.Content tagName="p" value={ body }/>
            </div>
            <div class="col col-lg-6 col-md-12 box justify-content-center">
            <RichText.Content tagName="h2" value={ title2 }/>
            <RichText.Content tagName="p" value={ body2 }/>
            </div>
            </div>
        );
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
            type: 'string',
        },
        name_row: {
            type: 'string',
        },
        tel_row: {
            type: 'string',
        },
        email_row: {
            type: 'string',
        },
        btn_row: {
            type: 'string',
        },
    },

    edit({ attributes, setAttributes }) {
        const {
            name_row,
            tel_row,
            email_row,
            btn_row,
            header_row
        } = attributes;

        // custom functions
        function onChangeName(newName) {
            setAttributes( { name_row: newName } );
        }

        function onChangeTel(newTel) {
            setAttributes( { tel_row: newTel } );
        }
        function onChangeEmail(newEmail) {
            setAttributes( { email_row: newEmail } );
        }
        function onChangeBtn(newBtn) {
            setAttributes( { btn_row: newBtn } );
        }
        function onChangeHeader(newHeader) {
            setAttributes( { header_row: newHeader } );
        }



        return ([
            <div>
                <RichText key="editable"
                    tagName="h2"
                    placeholder="Header"
                    value={ header_row }
                    onChange={ onChangeHeader }/>
                <RichText key="editable"
                    tagName="p"
            className="nameSel"
                    placeholder="Name"
                    value={ name_row }
                    onChange={ onChangeName }/>
                <RichText key="editable"
                    tagName="p"
            className="telSel"
                    placeholder="Number"
                    value={ tel_row }
                    onChange={ onChangeTel }/>
                <RichText key="editable"
                    tagName="p"
            className="emailSel"
                    placeholder="Email"
                    value={ email_row }
                    onChange={ onChangeEmail }/>
                <RichText key="editable"
                    tagName="p"
            className="btnSel"
                    placeholder="Buton"
                    value={ btn_row }
                    onChange={ onChangeBtn }/>
            </div>
        ]);
    },

    save({ attributes }) {
        const {
            name_row,
            tel_row,
            email_row,
            btn_row,
            header_row,
        } = attributes;

        return (
            <div class ="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
            <h2>{ header_row }</h2>
            <form class="form-container">
            <div class="form-group">

            <input type="text" class="form-control form-field form-name" placeholder={ name_row } name="name"></input>

            </div>
            <div class="form-group">

            <input type="tel" class="form-control form-field form-number" placeholder={ tel_row } name="tel"></input>
            </div>
            <div class="form-group">

            <input type="email" class="form-control form-field form-email" placeholder={ email_row } name="useremail"></input>

            </div>
            <div id="submit-ajax">
            <button type="submit" class="btn btn-light submit-button btn-block border">{ btn_row }</button>
            </div>
            </form>
            </div>
            <div class="col-lg-4"></div>
            </div>

        );
    }
});

