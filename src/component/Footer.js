import React, {Component} from 'react';
import '../css/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <footer id="footer">
                <p><i className="fa fa-copyright" aria-hidden="true"></i> 2026 <strong>Shulin Saraswat</strong>. All rights reserved.</p>
                <p>Designed and built as a personal portfolio.</p>
            </footer>
        );
    }
}
