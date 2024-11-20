import { Drawer } from 'expo-router/drawer';


export default function Layout() {
  return (
    
      <Drawer>
        <Drawer.Screen
          name="index" 
          options={{ title: 'Página Inicial',
          }}
        />
        <Drawer.Screen
          name="report_card" 
          options={{title: 'Boletim Escolar',
          }}
        />
         <Drawer.Screen
          name="calendar" 
          options={{title: 'Calendário Escolar',
          }}
        />
         <Drawer.Screen
          name="events" 
          options={{title: 'Eventos',
          }}
        />
         <Drawer.Screen
          name="contact" 
          options={{title: 'Contatos',
          }}
        />
      </Drawer>
  
  );
}