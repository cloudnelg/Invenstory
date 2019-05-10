import React from 'react';
import ImageUploader from 'react-images-upload';

class Images extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <ImageUploader className={'uploadBox'}
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
                withPreview={true}
                fileContainerStyle={
                    {
                        "flex-direction": "row",
                        "margin-bottom": "-3%",
                        "width": "70%",
                        "height": "20%",
                        "padding": "0%",
                    }
                }
                singleImage={true}
                buttonClassName={"upload"}
                buttonStyles= {
                    {
                        'background': 'linear-gradient(90deg, #0000cc, #6666ff, #b3b3ff, #0000cc)',
                        'backgroundSize': '400%',
                        'borderRadius': '10px',
                        'textAlign': 'center',
                        'border': "1px",
                        'borderStyle': "solid",
                        'fontSize': "20px",
                        'fontWeight': '200',
                       
                    }
                }
            />
        );
    }
}

export default Images;