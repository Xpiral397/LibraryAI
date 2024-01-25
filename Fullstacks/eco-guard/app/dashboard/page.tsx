"use client"
import React from 'react'
import Marine from "@/public/assets/terrestial.jpg"
import {Button as Buttons, Image, Card, CardFooter, CardHeader} from '@nextui-org/react'

import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {KeyboardArrowLeft} from '@mui/icons-material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{flexGrow: 1, maxHeight: 100}} >
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',

                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img


                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default function Page() {
    return (

        <div>

            <section className='bg-white shadow-xl rounded-md w-full '>
                {/* <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-[130px] object-cover"
                src={Marine.src}
            /> */}

                <div className='grid grid-cols-2  w-full gap-10 lg:gap-x-[20px] gap-y-[20px] px-2'>

                    <div >
                        <Card isFooterBlurred className="w-full lg:h-[400px] h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold"> Explore Thre Manrine Monitoring</p>
                                <h4 className="text-white/90 font-medium text-xl">Your the Map for your location</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src={Marine.src}
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="Breathing app icon"
                                        className="rounded-full w-10 h-11 bg-black"
                                        src="/images/breathing-app-icon.jpeg"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-tiny text-white/60">Breathing App</p>
                                        <p className="text-tiny text-white/60">Explore The Universe,</p>
                                    </div>
                                </div>
                                <Buttons radius="full" size="sm">Get App</Buttons>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        <Card isFooterBlurred className="w-full lg:h-[400px] h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src={Marine.src}
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="Breathing app icon"
                                        className="rounded-full w-10 h-11 bg-black"
                                        src="/images/breathing-app-icon.jpeg"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-tiny text-white/60">Breathing App</p>
                                        <p className="text-tiny text-white/60">Explore The Universe,</p>
                                    </div>
                                </div>
                                <Buttons radius="full" size="sm">Get App</Buttons>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        <Card isFooterBlurred className="w-full lg:h-[400px] h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src={Marine.src}
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="Breathing app icon"
                                        className="rounded-full w-10 h-11 bg-black"
                                        src="/images/breathing-app-icon.jpeg"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-tiny text-white/60">Breathing App</p>
                                        <p className="text-tiny text-white/60">Get a good {"night's"} sleep.</p>
                                    </div>
                                </div>
                                <Buttons radius="full" size="sm">Get App</Buttons>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        <Card isFooterBlurred className="w-full lg:h-[400px] h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src={Marine.src}
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="Breathing app icon"
                                        className="rounded-full w-10 h-11 bg-black"
                                        src="/images/breathing-app-icon.jpeg"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-tiny text-white/60">Breathing App</p>
                                        <p className="text-tiny text-white/60">Explore The Universe,</p>
                                    </div>
                                </div>
                                <Buttons radius="full" size="sm">Get App</Buttons>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
