# Generated by Django 4.1.7 on 2023-03-14 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(default='', max_length=50, verbose_name='Notice Subject')),
                ('notice_date', models.DateField(verbose_name='Notice Date')),
                ('upload_on', models.DateTimeField(auto_now_add=True, verbose_name='Notice Upload Date')),
                ('notice_copy', models.FileField(default='', upload_to='Notices/', verbose_name='Notice Copy')),
            ],
            options={
                'ordering': ['notice_date'],
            },
        ),
    ]
