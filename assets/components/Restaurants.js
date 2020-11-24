import React, {Component} from 'react';
import axios from 'axios';
    
class Restaurants extends Component {
    constructor() {
        super();
        this.state = { restaurants: [], loading: true};
    }
    
    componentDidMount() {
        this.getRestaurants();
    }
    
    getRestaurants() {
        axios.get(`/api/restaurants`)
            .then(restaurants => {
                this.setState({ restaurants: restaurants.data, loading: false})
            })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of restaurants</span>Created with <i
                                className="fa fa-heart"></i> by Adrià Figueres</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.restaurants.map(restaurant =>
                                    <div className="col-md-10 offset-md-1 row-block" key={restaurant.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img className="rounded-circle"
                                                             src={restaurant.logo}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{restaurant.name}</h4>
                                                        <p>{restaurant.location}</p>
                                                        <p>{restaurant.website}</p>
                                                        <p>{restaurant.phone}</p>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <a href="#" className="btn btn-default">Contact Now</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
export default Restaurants;