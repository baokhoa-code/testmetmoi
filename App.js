import CustomNavigation from './src/navigation/CustomNavigation'
import { AuthProvider } from "./src/context/authContext";
import { TopicProvider } from "./src/context/topicContext";
import { QuestionProvider } from "./src/context/questionContext";

export default function App() {
    return (
        <AuthProvider>
            <TopicProvider>
                <QuestionProvider>
                    <CustomNavigation />
                </QuestionProvider>
            </TopicProvider>
        </AuthProvider>
    )
}