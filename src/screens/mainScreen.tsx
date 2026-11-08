import Searcher from '@/components/searcher';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import JobCard from '../components/jobCard';
import NavigationButton from '../components/navigationButton';
import { STYLES } from '../constants/uiDesign';

export default function MainScreen() {
  return (
    <View style={STYLES.container}>
        <View style={STYLES.imageHeader}>
            <Image source={require('../../assets/images/logo.png')} 
            style={{
            width: 80,
            height: 80,
          }}
            />
            <View style={{ flex: 1 }}>
                <Text style={STYLES.title}>StudentsJobs</Text>
            </View>
            <Ionicons name="reorder-four-outline" size={44}></Ionicons>
        </View>

        <Searcher placeholder='Search for jobs in Australia'/>
 
        <View style={STYLES.formContainer}>
            <Text style={[STYLES.subtitle, {marginBottom: 20}]}>Recommended</Text>
        </View>

        <JobCard
            title="UX Designer Junior"
            company="Information & Technology Company"
            jobtype='Casual, on site'
            location="Perth, Western Australia"
            salary="$39 an hour"

            description="We are looking for a Junior UX Designer who is passionate about understanding user needs, creating wireframes and prototypes, and improving digital experiences. 

            What we offer:

            ·Flexible working arrangements suitable for students.
            ·Mentorship and opportunities to learn from experienced designers.
            ·Hands-on experience with real-world projects.
            ·A collaborative and supportive team environment."
            icon={require('../../assets/images/icon.png')}
        />

        <JobCard
            title="Full-Stack Developer"
            company="Information & Technology Company"
            jobtype='Part time, remote'
            location="Osborne Park, Western Australia"
            salary="$41 an hour"
            description="We are looking for a Junior Full Stack Developer to help build and maintain web applications. You will work with frontend and backend technologies, collaborate with the development team, and contribute to real-world projects. Basic knowledge of JavaScript, React, and databases is preferred.
            
            If this sounds like you we encourage you to apply directly through the company email or website"
            icon={require('../../assets/images/favicon.png')}
        />

        <NavigationButton
            title="Go to Searcher Jobs filter"
            destination="JobsFilter"
        />
    </View>
  );
}
