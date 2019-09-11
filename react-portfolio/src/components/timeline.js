import React, {
  Component
} from 'react';
import '../css/experience.css'
export class Timeline extends Component {
  renderHTML(content) {
    return {__html:content};
  }
  render() {
    return (
      <div>
         <ul class="timeline">
         {           
           this.props.itemsList.map((item,id) =>
              <li key={id} className={id%2===0?'timeline-inverted':'test'}>
                  <div className="timeline-badge primary">
                    <a><i className="glyphicon glyphicon-record" rel="tooltip" title="11 hours ago via Twitter" id /></a>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <img className="img-responsive" src={item.imgCompany} alt={item.companyName}/>
                    </div>
                    <div className="timeline-body">
                      <h3>{item.position}</h3>
                      <h5>{item.time}</h5>
                      <p dangerouslySetInnerHTML={this.renderHTML(item.description)}></p>
                    </div>                  
                  </div>
              </li>
           )
         }
        <li class="clearfix" style={{"float": "none"}}></li>
        </ul>
      </div>
    )
  }
}