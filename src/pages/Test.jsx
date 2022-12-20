import React, {Component} from 'react'
import QrReader from 'react-qr-reader'

// import QrReader from 'react-qr-scanner'

class Test extends Component {
    state = {
        result: '',
        facingMode: user,
        legacyMode: false,

    }

    handleScan(data) {
        this.setState({
            result: data,
        })
    }

    handleError(err) {
        this.setState(
            {legacyMode: true}
        )
    }

    choiceButton = () => {
        if (this.state.facingMode === "environment") {
            this.setState({
                facingMode: "user"
            })
        } else {
            this.setState({
                facingMode: "environment"
            })
        }
    }

    openImageDialog() {
        this.ref.qrReader1.openImageDialog()
    }


    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        }

        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <input type="button" value="Cambiar de cámara" onClick={this.choiceButton}/>
                {
                    this.state.legacyMode ?
                        (<input type="button" value="Adjuntar QR" onClick={() => this.openImageDialog()}/>) : ('')
                }
                <p>{this.state.result}</p>
            </div>
        )
    }
}