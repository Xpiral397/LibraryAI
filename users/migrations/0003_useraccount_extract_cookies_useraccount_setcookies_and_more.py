# Generated by Django 4.2.10 on 2024-03-17 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_useraccount_account'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='extract_cookies',
            field=models.JSONField(default={}),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='setCookies',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='account',
            field=models.JSONField(default={}),
        ),
    ]