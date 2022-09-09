import React from "react";


class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {src: "/images/circle-loading.svg"};
    }
    getSrc(){
        const image=new Image();
        image.onload=()=>{
            this.setState({src:this.props.src})
        }
        image.onerror=()=>{
            this.setState({src:"error.svg"})
        }
    }
    componentDidMount() {
        const image=new Image();
        image.onload=()=>{
            this.setState({src:this.props.src})
        }
        image.onerror=()=>{
            this.setState({src:"error.svg"})
        }
    }

    componentWillUnmount() {
        const image=new Image();
        image.onload=()=>{
            this.setState({src:this.props.src})
        }
        image.onerror=()=>{
            this.setState({src:"error.svg"})
        }
    }

    render() {
        return <img src={this.state.src} className="card-img-top" alt="logo" onError={()=>this.setState({src:this.props.src})} onLoadStart={()=>this.setState({src:"error.svg"})}/>;
    }
}
export default ImageComponent;