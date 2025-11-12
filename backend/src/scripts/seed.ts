import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { MembersService } from '../members/members.service';
import { EventsService } from '../events/events.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  
  const membersService = app.get(MembersService);
  const eventsService = app.get(EventsService);

  console.log('🌱 Seeding database...');

  // Créer des membres de test
  const members = await Promise.all([
    membersService.create({
      firstName: 'Marc',
      lastName: 'Dubois',
      email: 'marc.dubois@example.com',
      role: 'Membre',
      isActive: true,
      cotisationPaid: true,
      cotisationYear: 2024,
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    }),
    membersService.create({
      firstName: 'Thomas',
      lastName: 'Martin',
      email: 'thomas.martin@example.com',
      role: 'Membre',
      isActive: true,
      cotisationPaid: true,
      cotisationYear: 2024,
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
    }),
    membersService.create({
      firstName: 'Sophie',
      lastName: 'Bernard',
      email: 'sophie.bernard@example.com',
      role: 'Admin',
      isActive: true,
      cotisationPaid: true,
      cotisationYear: 2024,
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
    }),
  ]);

  console.log(`✅ Created ${members.length} members`);

  // Créer des événements de test
  const now = new Date();
  const events = await Promise.all([
    eventsService.create({
      title: 'Match de foot entre potes',
      description: 'Une partie de football conviviale entre amis pour se défouler et passer un bon moment ensemble.',
      category: 'Sport',
      date: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000), // Dans 5 jours
      location: 'Stade Municipal, Paris',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3c3dfea410-32fea5b98e81b25778ae.png',
      maxParticipants: 20,
      createdBy: members[0]._id.toString(),
    }),
    eventsService.create({
      title: 'Visite expo art moderne',
      description: 'Découverte d\'une exposition d\'art contemporain suivie d\'un verre pour échanger nos impressions.',
      category: 'Culture',
      date: new Date(now.getTime() + 8 * 24 * 60 * 60 * 1000), // Dans 8 jours
      location: 'Musée d\'Art, Paris',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/2aac47c970-5b7a42a37aeca7028f60.png',
      maxParticipants: 15,
      createdBy: members[1]._id.toString(),
    }),
    eventsService.create({
      title: 'Dîner de fin d\'année',
      description: 'Un repas festif pour célébrer la fin d\'année tous ensemble autour d\'un bon repas.',
      category: 'Repas',
      date: new Date(now.getTime() + 12 * 24 * 60 * 60 * 1000), // Dans 12 jours
      location: 'Restaurant Le Convivial',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5f852a02d6-3b2792aee94256b01c09.png',
      maxParticipants: 25,
      createdBy: members[2]._id.toString(),
    }),
  ]);

  console.log(`✅ Created ${events.length} events`);

  // Ajouter des participants
  await eventsService.addParticipant(events[0]._id.toString(), members[1]._id.toString());
  await eventsService.addParticipant(events[0]._id.toString(), members[2]._id.toString());
  await eventsService.addParticipant(events[1]._id.toString(), members[0]._id.toString());

  console.log('✅ Added participants to events');
  console.log('🎉 Database seeded successfully!');

  await app.close();
}

bootstrap();

