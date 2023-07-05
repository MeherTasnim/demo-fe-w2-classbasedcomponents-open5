import React from 'react';

class Photo extends React.Component {
    constructor(props){
        super(props);  // let's me use props
    }

    render() {
        return(
            <div>
                <img width="350" height="350" src={ this.props.imgUrl } />
            </div>
        )
    }
}

export { Photo };