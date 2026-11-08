import Searcher from '@/components/searcher';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import JobOptions from '../components/jobOptions';
import JobTypeFilter from '../components/jobType';
import NavigationButton from '../components/navigationButton';
import SalaryFilter from '../components/salaryFilter';
import { STYLES } from '../constants/uiDesign';

export default function JobsFilterScreen() {
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
        <View style={{ flexDirection: 'row', alignItems:'flex-end', gap:10 }}>
            <Text style= {STYLES.title}>Filter</Text>
            <Ionicons name="options-outline" size={30}></Ionicons>
        </View>
        <JobTypeFilter></JobTypeFilter>
        <SalaryFilter></SalaryFilter>
        <JobOptions name="Job Category" options={['Engineering', 'IT', 'Design', 'Marketing', 'Hospitality']}/>
        <JobOptions name="Location" options={['New South Wales','Victoria','Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Australian Capital Territory','Northern Territory',]}/>
        <NavigationButton
            title="Go to Log In Screen"
            destination="Login"
        />
        <NavigationButton
            title="Go to Log Main Screen"
            destination="Main"
        />
    </View>
  );
}
