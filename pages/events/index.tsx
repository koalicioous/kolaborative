import { ReactElement } from 'react';
import { SWRConfig } from 'swr';
import BasicLayout from '../../components/layout/base/basic-layout';
import EventList from '../../components/events/event-list';
import { Event } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

interface EventsProps {
  fallback: Event[]
}

export default function Events({ fallback }: EventsProps) {
  return (
    <main className="w-screen min-h-80">
      <SWRConfig value={{ fallback }}>
        <EventList />
      </SWRConfig>
    </main>
  );
}

Events.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  );
};

export async function getStaticProps() {
  const { data: events } = await supabase.from('events').select('*');
  return {
    props: {
      fallback: {
        events,
      },
    },
  };
}
