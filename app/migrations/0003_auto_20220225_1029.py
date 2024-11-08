# Generated by Django 3.2.6 on 2022-02-25 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_user_isonline'),
    ]

    operations = [
        migrations.CreateModel(
            name='Visitor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip', models.CharField(max_length=200)),
                ('isRegistered', models.BooleanField()),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='ip',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
