import React from 'react'

const landing = () => {
  return (
    <div class="row">
    <div id="boat">
        <img src="boat.png"/>
    </div>
    
    <div id="content">
        <br/><br/>
        <h1>Sail Replay: Relive Your Sailing Experience</h1><br/>
        <h3>In Collaboration with:</h3><br/>
        <img id="logo" src="logo.png"/>
        <br/><br/><br/><br/>
        <hr />
        <br/>
        <h2>Upload CSV file to continue</h2>
        <br/>

        <div class="row">
            <div>
                <input type="file" id="fileInput" style="display: none;" onchange="displayFileStatus()" />
                <label for="fileInput" class="button">Browse...</label>
            </div>
            <div id="fileStatus">No file selected</div>
        </div>

        <br/><br/>
        <button class="upload-button" onclick="" disabled>Upload</button>

    </div>
</div>

  )
}

export default landing