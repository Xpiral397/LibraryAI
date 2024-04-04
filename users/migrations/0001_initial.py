# Generated by Django 4.2.10 on 2024-03-05 10:53

import django.contrib.auth.validators
from django.db import migrations, models
import django.utils.timezone
import users.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=225, unique=True)),
                ('name', models.CharField(max_length=225)),
                ('is_active', models.BooleanField(default=True)),
                ('has_registered', models.BooleanField(default=False)),
                ('has_confirm_email', models.BooleanField(default=False)),
                ('has_confirm_location', models.BooleanField(default=False)),
                ('has_confirm_full_name', models.BooleanField(default=False)),
                ('has_confirm_number', models.BooleanField(default=False)),
                ('has_confirm_profile_picture', models.BooleanField(default=False)),
                ('number', models.CharField(blank=True, max_length=20, null=True)),
                ('nationality', models.CharField(blank=True, max_length=255, null=True)),
                ('gender', models.CharField(choices=[('MALE', 'MALE'), ('FEMALE', 'FEMALE'), ('PREFER-NOT-TO-SAY', 'PREFER-NOT-TO-SAY')], max_length=20)),
                ('date_of_birth', models.DateField(blank=True, null=True)),
                ('bio', models.TextField(blank=True)),
                ('address', models.CharField(blank=True, max_length=255)),
                ('occupation', models.CharField(blank=True, max_length=255)),
                ('website', models.URLField(blank=True)),
                ('languages_spoken', models.CharField(blank=True, max_length=255)),
                ('interests_hobbies', models.TextField(blank=True)),
                ('education', models.CharField(blank=True, max_length=255)),
                ('skills', models.TextField(blank=True)),
                ('favorite_books_movies_tv_shows', models.TextField(blank=True)),
                ('relationship_status', models.CharField(blank=True, max_length=50)),
                ('favorite_quotes', models.TextField(blank=True)),
                ('travel_experiences', models.TextField(blank=True)),
                ('achievements', models.TextField(blank=True)),
                ('volunteer_work', models.TextField(blank=True)),
                ('pet_ownership', models.CharField(blank=True, max_length=50)),
                ('music_preferences', models.TextField(blank=True)),
                ('fitness_activities', models.TextField(blank=True)),
                ('profile_picture', users.models.CustomImageField(blank=True, null=True, upload_to='profile_pictures/')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
    ]
