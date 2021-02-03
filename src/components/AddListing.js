import React, { Component, Fragment, useState, useEffect } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

import Map from '../containers/Map'




const AddListing = (props) => {


    const [listing, setListing] = useState({
        name: '',
        description: '',
        hours: '',
        address: ''
    })

    
    const handleTextChange = (e) => {
        const newState = { ...listing }
        newState[e.target.id] = e.target.value
        setListing(newState)
    }

    


    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...listing }
        payload.id = props.listings.length + 1
        delete payload.open
        console.log("THE LISTING", payload)
        props.addListing(payload)
        console.log("listing added!")
        props.history.push('/listings')
        
    }

    


   
        return (
            
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div style={{display: 'flex', alignItems: 'flex-start', marginTop: '100px'}}>
                                <form 
                                onSubmit={handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '50vh'}}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={listing.name} 
                                    onChange={handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    placeholder="Description" 
                                    value={listing.description} 
                                    onChange={handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    placeholder="Hours" 
                                    value={listing.hours} 
                                    onChange={handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={listing.address} 
                                    onChange={handleTextChange} 
                                    required />
                                <br />
                                
                                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                                
                                
                            </form>
                                </div>
                                
                            <div style={{marginTop: '100px', marginLeft: '50px'}}>
                            <Map localListing={listing} />
                            </div>
                            
                            </div>
                        
        )
    }


export default AddListing

