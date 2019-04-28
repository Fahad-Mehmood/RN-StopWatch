import React, {Component} from 'react'
import {View} from 'react-native'

import { 
  AdMobBanner, 
} from 'react-native-admob'

export default class Ads extends Component {

    constructor (props) {
        super(props)
    }
    bannerError (e) {
        alert(e)
      }
    render() {
    
        return(
            <View>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID={this.props.adUnitID}
                    testDeviceID="EMULATOR"
                    //didFailToReceiveAdWithError={(e) => this.bannerError}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }  
}
