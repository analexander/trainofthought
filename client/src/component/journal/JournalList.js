import React, { Component } from 'react';
import '../journal/JournalList.css'

class Recent extends Component {
    render(){
        <>
        <section className="section-content">
            <div className="container">
                <h3 id="e31_5">Recent Entries</h3>
                <div id="e31_14"></div><span id="e31_15">2019</span><span id="e31_16">100 Entries</span>
                <div id="e31_18"></div><span id="e31_19">2018</span><span id="e31_20">150 Entries</span>
                <div id="e31_38"></div><span id="e31_39">2020</span><span id="e31_40">30 Entries</span>
                <div id="e31_46"></div><span id="e31_47">Search entries</span>
            </div>
        </section>
        </>
    }
}

export default withRouter(Recent);