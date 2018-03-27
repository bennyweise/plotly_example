from setuptools import setup

exec (open('plotly_example/version.py').read())

setup(
    name='plotly_example',
    version=__version__,
    author='',
    packages=['plotly_example'],
    include_package_data=True,
    license='MIT',
    description='Dash UI component suite',
    install_requires=[]
)
