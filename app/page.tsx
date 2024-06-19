import type { Metadata } from "next";
import supabase from '@/utils/supabase'
import OpeningBg from './components/openingBg';
import Container from "./components";

export const metadata: Metadata = {
    title: "Frontend Engineer Leo's Portfolio - Supabase(BaaS) & React",
    description: "Generated by create next app",
};

export default function Home() {
    const checkSupabaseClient = () => {
        try {
            supabase;
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    const connectSupabaseClient = async() => {
        const { data: QUIZ } = await supabase.from('nextjs-quiz')
            .select('*')
            .order('id', { ascending: true })
        const { data: DB, error } = await supabase.from('nextjs-quiz-choices')
            .select('*')

        return(
            // <Container QUIZ={QUIZ} DB={DB}></Container>
            <>
                <p>接続成功</p>
                <pre>
                    {JSON.stringify(QUIZ)}
                    {JSON.stringify(DB)}
                </pre>
            </>
        )
    }

    return(
        <main className="flex flex-col items-center justify-between p-24">
            {/* <OpeningBg></OpeningBg> */}
            {checkSupabaseClient() ? connectSupabaseClient() : <p>接続エラー</p>}
        </main>
    )
}

